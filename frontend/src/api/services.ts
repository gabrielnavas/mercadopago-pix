export interface CriarPixParams {
  transaction_amount: number
  description: string
  paymentMethodId: string
  email: string
  identificationType: string
  number: string
}

export const criaPix = async (params: CriarPixParams) => {
  const response = await fetch("http://localhost:3000/criar-pix", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params),
  })

  if (response.status >= 400) {
    alert('algo deu errado, tente novamente mais tarde.')
  }

  const data = await response.json()
  return data
}