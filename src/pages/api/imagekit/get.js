import ImageKit from "imagekit";
const imagekit = new ImageKit({
    urlEndpoint: process.env.imagekitUrlEndPoint,
    publicKey: process.env.imagekitPublicKey,
    privateKey: process.env.imagekitPrivateKey
});

const getImageKit = async (req, res) => {
    var result = imagekit.getAuthenticationParameters();
    res.status(200).json(result);
}

export default getImageKit;