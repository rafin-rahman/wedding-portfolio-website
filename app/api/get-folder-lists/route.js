import {NextResponse} from "next/server";
import axios from "axios";

export async function GET() {
	try {
		// Authorize with Backblaze
		const authResponse = await axios.post(
			"https://api.backblazeb2.com/b2api/v2/b2_authorize_account",
			{},
			{
				auth: {
					username: process.env.BACKBLAZE_KEY_ID,
					password: process.env.BACKBLAZE_APP_KEY
				}
			}
		);

		console.log("Authorization Response:", authResponse.data);

		const authToken = authResponse.data.authorizationToken;
		const apiUrl = authResponse.data.apiUrl;

		// Fetch bucketId using bucket name
		const bucketResponse = await axios.post(
			`${apiUrl}/b2api/v2/b2_list_buckets`,
			{
				accountId: authResponse.data.accountId
			},
			{
				headers: {
					Authorization: authToken
				}
			}
		);

		const bucket = bucketResponse.data.buckets.find(
			(b) => b.bucketName === process.env.BACKBLAZE_BUCKET_NAME
		);

		if (!bucket) {
			throw new Error(`Bucket with name ${process.env.BACKBLAZE_BUCKET_NAME} not found`);
		}

		const bucketId = bucket.bucketId;

		// Fetch file list
		const fileListResponse = await axios.post(
			`${apiUrl}/b2api/v2/b2_list_file_names`,
			{
				bucketId: bucketId,
				prefix: ""
			},
			{
				headers: {
					Authorization: authToken
				}
			}
		);

		const files = fileListResponse.data.files?.map((file) => ({
			fileName: file.fileName,
			url: `https://f003.backblazeb2.com/file/${process.env.BACKBLAZE_BUCKET_NAME}/${file.fileName}`
		})) || [];

		return NextResponse.json(files);
	} catch (error) {
		console.error("Error fetching Backblaze files:", error.response?.data || error.message);
		return NextResponse.json({error: error.message}, {status: 500});
	}
}