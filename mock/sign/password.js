let passwordIn = {
    error: '0',
    message: "ok",
    data: {
        sn: Buffer.from("user sn").toString('base64').replace(/=/g, '')
    }
}

export default {
    'post|/sign/password-in': passwordIn
}