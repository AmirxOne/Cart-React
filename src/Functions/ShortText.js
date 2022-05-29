const ShortText = (title) => {
    const short = title.split(" ");
    return `${short[0]} ${short[1]} ${short[2]}...`
}

export { ShortText }