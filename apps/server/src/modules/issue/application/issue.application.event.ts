export namespace IssueApplicationEvent {
  export namespace IssueCreated {
    export const key = 'issue.application.issue.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
