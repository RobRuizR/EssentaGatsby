export function handler(event: any, context: any, callback: any) {
  callback(null, {
    statusCode: 200,
    body: 'Yay!',
  });
}
