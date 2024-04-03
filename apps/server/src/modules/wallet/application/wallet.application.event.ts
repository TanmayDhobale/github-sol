export namespace WalletApplicationEvent {
  export namespace WalletCreated {
    export const key = 'wallet.application.wallet.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
