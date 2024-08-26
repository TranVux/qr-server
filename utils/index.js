const getUserAgent = (req) => {
    return req?.headers['user-agent']?.toLowerCase();
}

module.exports = {
    getUserAgent,
}
