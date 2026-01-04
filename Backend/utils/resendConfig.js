import { Resend } from 'resend';
const resend  = new Resend(process.env.RESEND_API_KEY);
export const sendMail = (fromEmail,subject,name,services,company)=>{
    return resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: 'saaransh1621m@gmail.com',
        replyTo: fromEmail,
        subject: subject,
        html:`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Portfolio Inquiry</title>
  </head>

  <body style="margin:0; padding:0; background:#f6f7f9; font-family: Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">

            <!-- Header -->
            <tr>
              <td style="background:#111827; padding:20px;">
                <h2 style="margin:0; color:#ffffff; font-size:18px;">
                  📩 New Portfolio Service Request
                </h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px; color:#111827; font-size:14px; line-height:1.6;">
                <p style="margin-top:0;">
                  Hey Saaransh,
                </p>

                <p>
                  You received a new service inquiry from your portfolio.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
                  <tr>
                    <td style="padding:8px 0; width:140px;"><strong>Name:</strong></td>
                    <td style="padding:8px 0;">{${name}}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;"><strong>Email:</strong></td>
                    <td style="padding:8px 0;">{${fromEmail}}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;"><strong>Company:</strong></td>
                    <td style="padding:8px 0;">
                      {${company || "Not provided"}}
                    </td>
                  </tr>
                </table>

                <p style="margin-bottom:8px;"><strong>Requested Services:</strong></p>

                <div style="background:#f3f4f6; padding:16px; border-radius:6px;">
                  {${services}}
                </div>

                <p style="margin-top:24px; font-size:13px; color:#6b7280;">
                  You can reply directly to this email to respond to the sender.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9fafb; padding:16px; text-align:center; font-size:12px; color:#6b7280;">
                Portfolio Contact • saaranshmehta.dev
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
    })
}