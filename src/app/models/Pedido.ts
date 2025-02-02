export type Adereco = {
  uuid: string,
  type: string,
  name: string,
  pictureUrl: string,
  isAvailable: boolean,
  lastModified: Date
}

export type Cliente = {
  name: string,
  email: string,
  phoneNumber: string,
}

export type Pedido = {
  aderecos: Adereco[],
  cliente: Cliente,
  //dueDate: Date,
  //observacoes: string
}

export type BackendResponse<DataType> = {
  success: boolean,
  data?: DataType,
  error?: {
    status: string,
    message: string,
  };
};
