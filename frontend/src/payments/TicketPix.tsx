import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { createPix } from '../api/services';

export default function TicketPix() {
  const [qrCodeBase64, setQrCodeBase64] = useState('')
  const [ticketUrl, setTicketUrl] = useState('')

  const MOCK_BODY = {
    transaction_amount: 2.00,
    description: "Big Mac",
    paymentMethodId: "pix",
    email: "gabrielnavas@protonmail.com",
    identificationType: "CPF",
    number: "397.698.800-60"
  }

  const onClickPagarComPix = async () => {
    const data = await createPix(MOCK_BODY)
    setQrCodeBase64(data.point_of_interaction.transaction_data.qr_code_base64)
    setTicketUrl(data.point_of_interaction.transaction_data.ticket_url)
    console.log(data);
  }

  if (qrCodeBase64) {
    return (
      <Box width='100%'>

        {/* mosta o qrcode em base64 */}
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          gap='0.7rem' >
          <strong>Qrcode do Pix</strong>
          <img style={{ width: '15rem' }} src={`data:image/png;base64, ${qrCodeBase64}`} />
          <Button variant='contained' onClick={() => setQrCodeBase64('')}>Voltar</Button>
        </Box>

        {/* via iframe ticket url */}
        <iframe src={ticketUrl} width='100%' height='800px' />
      </Box>
    )
  }


  return (
    <Card sx={{ padding: 5, maxWidth: 345, maxHeight: 950 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          <strong>{MOCK_BODY.description}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Quantidade <strong>{MOCK_BODY.transaction_amount}</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          E-mail: <strong>{MOCK_BODY.email}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClickPagarComPix()}>Pagar com PIX</Button>
      </CardActions>
    </Card>
  )
}