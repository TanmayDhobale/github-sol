export namespace ClaimApplicationEvent {
  export namespace ClaimCreated {
    export const key = 'claim.application.claim.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
