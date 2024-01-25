import { Injectable, Logger } from '@nestjs/common';
import { Transporter, createTransport } from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: Transporter;

  private readonly logger = new Logger(MailService.name);

  constructor() {
    this.transporter = createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    if (!this.transporter) {
      this.logger.error('Email transporter not available.');
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log('Email sent successfully.');
    } catch (error) {
      this.logger.error('Error sending email:', error.message);
    }
  }
}
