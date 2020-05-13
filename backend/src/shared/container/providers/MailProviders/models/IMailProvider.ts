import ISendMailDto from '@shared/container/providers/MailProviders/dtos/ISendMailDto';

export default interface IMailProvider {
  sendMail(data: ISendMailDto): Promise<void>;
}
