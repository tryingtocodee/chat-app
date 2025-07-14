export type createUserDto = {
    email : string
    fullName : string
    password : string
    profilePic? : string 
}

export type getUserDto = {
    email : string
}