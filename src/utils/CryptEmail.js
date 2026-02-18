import bcrypt from "bcryptjs";

export const cryptEmail = async(email) => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(email, salt);
    console.log(hash);
    return hash;
}