import { useState, useEffect } from "react";



const YoutubeAccessToken = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        const authenticateUser = async () => {
            const oauth2Client = new google.auth.OAuth2(
                process.env.NEXT_PUBLIC_CLIENT_ID,
                process.env.NEXT_PUBLIC_CLIENT_SECRET,
                process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
            );

            const url = oauth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: 'https://www.googleapis.com/auth/youtube.readonly',
            });

            // Redirect to Google's OAuth 2.0 server
            window.location.href = url;
        };

        const fetchVideo = async () => {
            if (accessToken) {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&part=player&access_token=${accessToken}`
                );
                const data = await response.json();
                setVideoUrl(data.items[0].player.embedHtml);
            }
        };

        // Handle authentication and fetching the video
        authenticateUser();
        fetchVideo();
    }, [accessToken]);

    return (
        <div>
            {videoUrl && (
                <div dangerouslySetInnerHTML={{ __html: videoUrl }} />
            )}
        </div>
    )
}

export default YoutubeAccessToken;