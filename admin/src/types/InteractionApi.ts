const networks = ['devnet', 'testnet', 'mainnet-beta'] as const;
const appEnvs = ['development', 'test', 'production'] as const;
export type Network = typeof networks[number];
export type AppEnv = typeof appEnvs[number];
interface IResponseSuccess<T> {
  success: true,
  statusCode: number,
  message: string,
  data: T,
  totalRow?: number
}
interface IResponseFail {
  success: false,
  statusCode: number,
  message: string,
}

export type IResponse<T = any> = IResponseSuccess<T> | IResponseFail

export interface ServerError {
  errorMsg: string
}