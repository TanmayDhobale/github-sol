export namespace BountyApplicationEvent {
  export namespace BountyCreated {
    export const key = 'bounty.application.bounty.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
