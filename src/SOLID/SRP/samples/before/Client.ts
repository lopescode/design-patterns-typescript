export class Client {
  public email: string

  create(email: string): void {
    console.log(`Client ${email} created successfully!`)
  }

  read(email: string): void {
    console.log(`Client ${email} read successfully!`)
  }

  update(email: string): void {
    console.log(`Client ${email} updated successfully!`)
  }

  delete(email: string): void {
    console.log(`Client ${email} deleted successfully!`)
  }

  sendEmail(): boolean {
    console.log(`Sending e-mail...`)

    return true
  }
}
