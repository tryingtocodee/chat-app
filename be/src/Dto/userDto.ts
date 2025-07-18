export type createUserDto = {
    email : string
    fullName : string
    password : string
    profilePic? : string 
}

export type getUserDto = {
    email : string
}

export type loginUserDto = {
    email : string 
password : string 
}