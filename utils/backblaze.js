import axios from 'axios';

let authToken = null;
let apiUrl = null;

async function authenticateBackblaze() {
	
	const response = await axios.post('https://api.backblazeb2.com/b2api/v2/b2_authorize_account', {}, {
		auth: {
			username: process.env.BACKBLAZE_KEY_ID,
			password: process.env.BACKBLAZE_APP_KEY
		}
	});


	authToken = response.data.authorizationToken;
	apiUrl = response.data.apiUrl;
}

export async function listFiles(prefix = "") {
	if (!authToken) {
		await authenticateBackblaze();
	}

	const response = await axios.post(
		`${apiUrl}/b2api/v2/b2_list_file_names`,
		{
			bucketId: process.env.BACKBLAZE_BUCKET_NAME,
			prefix
		},
		{
			headers: {
				Authorization: authToken
			}
		}
	);

	return response.data.files.map((file) => ({
		fileName: file.fileName,
		url: `https://f002.backblazeb2.com/file/${process.env.BACKBLAZE_BUCKET_NAME}/${file.fileName}`
	}));
}

export {authenticateBackblaze, authToken, apiUrl};