import z from 'zod';

const signupSchema = z.object({
    name: z.string()
        .regex(/^[A-Za-z]+$/i, "Números não são permitidos"),

    username: z.string()
    .nonempty('Apelido inválido'),

    email: z.string().email('E-mail inválido'),

    password: z.string()
        .min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
        .nonempty({message: 'A senha é necessário'}),

    confirmPassword: z.string()
        .min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
        .nonempty('Confirme a senha é necessário')
}).refine(({ password, confirmPassword }) => password == confirmPassword, { message: "As senhas não conferem", path: ["confirmPassword"]})

export default signupSchema;