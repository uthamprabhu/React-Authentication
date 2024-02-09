import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'uthamprabhu1@gmail.com',
                from: 'zappermash1@gmail.com',
                subject: 'Does this work?',
                text: 'If u\'r reading this...It works!!!...<:{)'
            })

            res.sendStatus(200)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}