// Step 1: Import the parts of the module you want to use
const { MercadoPagoConfig, Payment } = require('mercadopago');

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({
  accessToken: process.env.access_token,
  options: {
    timeout: 5000,
    idempotencyKey: 'abc'
  }
});

// Step 3: Initialize the API object
const payment = new Payment(client);


var express = require('express');
var router = express.Router();

const MOCK_PIX = {
  accounts_info: null,
  acquirer_reconciliation: [],
  additional_info: {
    authentication_code: null,
    available_balance: null,
    nsu_processadora: null
  },
  authorization_code: null,
  binary_mode: false,
  brand_id: null,
  build_version: '3.78.0-rc-3',
  call_for_authorize_id: null,
  callback_url: null,
  captured: true,
  card: {},
  charges_details: [
    {
      accounts: [Object],
      amounts: [Object],
      client_id: 0,
      date_created: '2024-11-13T20:50:52.000-04:00',
      id: '1320263474-001',
      last_updated: '2024-11-13T20:50:52.000-04:00',
      metadata: [Object],
      name: 'mercadopago_fee',
      refund_charges: [],
      reserve_id: null,
      type: 'fee'
    }
  ],
  charges_execution_info: {
    internal_execution: {
      date: '2024-11-13T20:50:52.504-04:00',
      execution_id: '01JCM2DKX99RM032D3AXYJHWG4'
    }
  },
  collector_id: 263942118,
  corporation_id: null,
  counter_currency: null,
  coupon_amount: 0,
  currency_id: 'BRL',
  date_approved: null,
  date_created: '2024-11-13T20:50:52.511-04:00',
  date_last_updated: '2024-11-13T20:50:52.511-04:00',
  date_of_expiration: '2024-11-14T20:50:52.085-04:00',
  deduction_schema: null,
  description: 'Pagamento de test',
  differential_pricing_id: null,
  external_reference: null,
  fee_details: [],
  financing_group: null,
  id: 1320263474,
  installments: 1,
  integrator_id: null,
  issuer_id: '12501',
  live_mode: false,
  marketplace_owner: null,
  merchant_account_id: null,
  merchant_number: null,
  metadata: {},
  money_release_date: null,
  money_release_schema: null,
  money_release_status: 'released',
  notification_url: null,
  operation_type: 'regular_payment',
  order: {},
  payer: {
    email: null,
    entity_type: null,
    first_name: null,
    id: '2094356223',
    identification: { number: null, type: null },
    last_name: null,
    phone: { area_code: null, extension: null, number: null },
    type: null
  },
  payment_method: { id: 'pix', issuer_id: '12501', type: 'bank_transfer' },
  payment_method_id: 'pix',
  payment_type_id: 'bank_transfer',
  platform_id: null,
  point_of_interaction: {
    application_data: { name: null, version: null },
    business_info: { branch: null, sub_unit: 'sdk', unit: 'online_payments' },
    location: { source: null, state_id: null },
    transaction_data: {
      bank_info: [Object],
      bank_transfer_id: null,
      e2e_id: null,
      financial_institution: null,
      infringement_notification: [Object],
      qr_code: '00020126580014br.gov.bcb.pix0136b76aa9c2-2ec4-4110-954e-ebfe34f05b6152040000530398654071000.005802BR5911NA50584IE246009Sao Paulo62230519mpqrinter132026347463046491',
      qr_code_base64: 'iVBORw0KGgoAAAANSUhEUgAABWQAAAVkAQAAAAB79iscAAANVklEQVR4Xu3XXXZjuQ1FYc0g859lzUCJcQDih5Q7a8Xslpx9HlQkAYLf9Vs9nh+UP4958s5Bey9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N5L1T5m/vV1Zj+x9T5b/Tmc2eo/8Wqs/CcyCmOeX8zEZLTWitZa1vLYhhat2tCiVRtatGpDi1ZtaNGq7Z21eZ7b/dlM9tXT09txdnJvN04MC1q0Clq0Clq0Clq0Clq0Clq0yodr8/52Kwux8rQPGvj6kTH0XLC0lo2BFm08tJbftVk1C7HyoO3b9dBaftdm1SzEyoO2b9dDa/ldm1WzECsP2r5dD63ld21WzUKsPGj7dj20lt+1WTULsfKg7dv10Fp+12bVLMTKg7Zv10Nr+V2bVbMQKw/avl0PreV3bVbNQqw8aPt2PbSWr9vsxKdbTu9Eal/ER+U164vC+ceCtgVtBC1aBS1aBS1aBS1aBS1a5Xdpc3AqRt9QjNS7bcDp2mk8WrQPtKdnM/Uu2taWQ9DOa6fxaNE+0J6ezdS7aFtbDkE7r53Go0X7+Gvt2OaQfMyfaM2WMX2sglTvbh/erm1btPuzaE9tNscP0KJV0KJV0KJV0KJV0KJV3k07Em//3T87A+1P/ewMtD/1szPQ/tTPzkD7Uz87A+1P/ewMtD/1szPQ/tTPzkD7Uz87A+1P/eyMj9eeY/9jjOTWarWU78R0X+V/PuOs9rX/mmbfOWjRKmjRKmjRKmjRKmjRKmjRKp+sbTKLHfs6po9CvZuUjJ1FIfvGNUt9Y5xZ0I6g9d2MHfsa7VF2OrOgHUHruxk79jXao+x0ZkE7gtZ3M3bsa7RH2enMgnYEre9m7NjX76Yd+ePT/SfOBqAq2nY0Zyo+E2+c/iyrpe5G0H4FLVoFLVoFLVoFLVoFLVoF7Ztr6zu2HU9YTm/vhW0bLfXDo5BfNf4s3pKvobUztGh1hhatztCi1RlatDpDi1ZnaD9fa6v2jo+L6suc3q7umJKpk43XWsanoUUbQYtWQYtWQYtWQYtWQYtW+VytpXbbhTyLL/A0Snp6U5x9V6hT2kPbu2hH0Ea8I1LP0M4p7aHtXbQjaCPeEalnaOeU9tD2LtoRtBHviNQztHNKe2h7F+0I2oh3ROrZG2ot1pSrMS7fzm3e8DTFVohkXyYL9dSC1oIWrYIWrYIWrYIWrYIWrYL2g7XbEEsarSUHn1ry7f2DzrJoHtfON9CijbO1RIvWY4NzugftClo/sxa0h2vnG2jRxtlaokXrscE53YN25X/QWnx627405rj68+i82NaMvpycQ6OKFi1ardCi1QotWq3QotUKLVqt0P4mrfdY2tuWb4e0bz7JGi9X1u/bWOXksUWLNoIWrYIWrYIWrYIWrYIWrfLJWju3ISdA3oqz+vazTq+rHZrbvHaatwUtWgUtWgUtWgUtWgUtWgUtWuVztXVcezGTkwbFC/FVo1DJlta3GdtXVQHavYAWbQQtWgUtWgUtWgUtWgXtJ2mzPs7svv9Y2rja3D7N067Zv/VuO6uf0bZrwFqi/QrauOBt7Qxt3EWLVnfRotVdtGh1Fy1a3UX7llprs2J6xlms8sZo3qq2aqNqIWW53a950KJV0KJV0KJV0KJV0KJV0KJVPl4byWc94wv2vrodX5AD8m4jj4+0hri3ghatghatghatghatghatghat8uHada5ktZ6Fp8rixdry7H+CVLRrXs1CxE+rqhbRolURLVoV0aJVES1aFdGiVREtWhU/Tls74u3zWW7t2neo+kYmBmR1tIwCWrQRtGgVtGgVtGgVtGgVtGiVz9Vmcty45U9ki1UDdQLUz4jm0eeFbG5v+NqCFq2CFq2CFq2CFq2CFq2CFq3y4draYYPHhYgX8sV8Yv+gjRctFR85fbMHLVoFLVoFLVoFLVoFLVoFLVrl12jHs3UVT+Rg347qnqpIaP5ZTtUMWrRx1vdoa84etLlC+7qaQYs2zvoebc3ZgzZXaF9XM2jRxlnfqSOHjJ9ajfg7scrtptgHZPOpzwv5GtrYol1L27VxaNGiPQ3I5lOfF9DGKrdo19J2bRxatGhPA7L51OcFtLHKLdq11LnPHwn8dmZpqJr24jBmy7mwV9HWoI2gbZNPqJeFvYq2Bm0EbZt8Qr0s7FW0NWgjaNvkE+plYa+irUEb+TRta/OzgGaLb5uxDhh328qvheKbG22yB+3pbbQZtApatApatApatApatAra99fWZ9u4fGIYTzM3SmaQH/0jo+X0s66tpe3QrqB9bi+iVfxGazn9rGtraTu0K2if24toFb/RWk4/69pa2g7tCtrn9iJaxW+0ltPPuraWtkO7gva5vfim2ufWsW3tifyqfDF5p+b43NNneHv+RfKurdCi1QotWq3QotUKLVqt0KLVCi1arX6HNge31LPxok2K6vnus97IL63f3KZ49q9HO2Jz0aJFm7sXL6JF+xW08VpUt7to0Spo0Spo/2Gt5TTJq3nVsn9fnp1klorPjPFjgJ/1XXvxifaJFm0ErZ2gRYvWg9ZO0KJF60FrJ++rrY/ZNqCe4Y7kO36QfTF03LXCqPqqNXuhfsFaoj2cobUtWrTaokWrLVq02qJFqy1atNq+tdZSL+T2cf6CuNQL8XbljULesFWOym/ZPw0t2ghatHFWd0+0aCN2FW0r5A1b5Si0aBW0aBW0b6NNynnI09+pTS+ezW22enVvqV9lsTfiZ7WsZR6V5Fk2oNUWLVpt0aLVFi1abdGi1RYtWm3Rvoe2FpMXqxxSC/lEfkEOaG+Pa/UssgnaXwkt2ghatApatApatApatApatMona9tjY5tn2eyrfCJy5sW8tVbq50b11ah6bkGLVkGLVkGLVkGLVkGLVkGLVvkQ7ZZ8Z5D3Fwd5e3uQ7ewU68tVPu5na7kH7Up5pwQtWgUtWgUtWgUtWgUtWgXtG2p96oDaO7HdmjOn78tvefQv2JvrULQjOwBtpvainTy0D7R7cx2KdmQHoM3UXrSTh/aBdm+uQ9GO7ID/a60XsyM9pyEPr+aN+hNn25TWPCbXv0hsV8m2uV6z4j7a3owWLVq0tRktWrRoazNatGjfWLuNi1v12ZiefTkzb+Q1PxsoS56d3s2h9VvW0nb7rSdaC9onWgvaJ1oL2idaC9onWgvaJ1oL2uebas+K5P0XZ3E3n1inpZAnifLsRrRoFbRoFbRoFbRoFbRoFbRold+hteQkH9cKQ1tv5ExLezaN9e6Q5Z8gUqsWtBa0aBW0aBW0aBW0aBW0aBW0H61tCt/arRhcn2gzN14reBJl1V1bt5Z817d9FzNz2wajRbujIlsBbWz7Lmbmtg1Gi3ZHRbYC2tj2XczMbRuMFu2OimwFtLHtu5iZ2zYYLdodFdkKf6vWJj3Pt0a1AqLZR2Q1ms/fHJ82Jmc6oxTQZjPa8y20q+A32uQMWrQKWrQKWrQKWrQK2n9C++yK3LZ4wRLNXjBF4MfZGF+rkS7b8WjRxtlaKmjRKmjRKmjRKmjRKmjRKh+jdUAM8ZUVcnr0+Z2U5fftfbaqz1ra3VPzmIz21GcrtH4LLVrdQotWt9Ci1S20aHULLVrd+hhtLZatj9uf2GI3/vRvbls/yzeyJTO2fpZrv4cWrYIWrYIWrYIWrYIWrYIWrfIhWksdmJ4AWAZ5k8UUX7VP81fiRh1lyebxuF9bS8U78mpeQIsWLdp6AS1atGjrBbRo0aKtF95LOy5sirYa5PFB+YTfaFlNMSrTPqMWvJrrfAdtyWraUWjRKmjRKmjRKmjRKmjRKmjfSBvTt+1Jtn/Vlrz2OCuyUDNes6AdQRu3LOct2q9koQYtWgUtWgUtWgUtWgXtP6c9pfdGcwxepfJpeWO0ZIZi+3o7O91F+/2LT7QetGgVtGgVtGgVtGgVtGiV99Xmex6bGastgc+3t5/HV0socpsDTu7aHGfrxlqiReuxjhq0aBW0aBW0aBW0aBW0aJU31zZU1eZVSz4RL3radl0txu3ajvc+uzaCFq2CFq2CFq2CFq2CFq2CFq3y4VqfH56NYkP2J8an1bRP277v+epus3jQjqAdt9CiLb1o0aJFW3vRokWLtvZ+oPaU8RmW+BaLz2sZn1avxdb7xgotWq3QotUKLVqt0KLVCi1ardCi1eqXa3ObjwVvTYrtn02Wo7yaT8ZZXSV++7S1fMEbW7Ro0eZZXaFFixZtXaFFixZtXaF9B+3Y+hDb7klZttQXs5otw534IJ8YHrRoFbRoFbRoFbRoFbRoFbRolU/WjtS2/bHY1sLLapzVb4lsD8WPBy1aBS1aBS1aBS1aBS1aBS1a5Tdo3z9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N4L2ntBey9o7wXtvaC9F7T3gvZe0N4L2nv5MO2/AZ4IuvuIMRLAAAAAAElFTkSuQmCC',
      ticket_url: 'https://www.mercadopago.com.br/sandbox/payments/1320263474/ticket?caller_id=2094356223&hash=6ebeeea5-96db-4d10-8402-b069184c14aa',
      transaction_id: null
    },
    type: 'OPENPLATFORM'
  },
  pos_id: null,
  processing_mode: 'aggregator',
  refunds: [],
  release_info: null,
  shipping_amount: 0,
  sponsor_id: null,
  statement_descriptor: null,
  status: 'pending',
  status_detail: 'pending_waiting_transfer',
  store_id: null,
  tags: null,
  taxes_amount: 0,
  transaction_amount: 1000,
  transaction_amount_refunded: 0,
  transaction_details: {
    acquirer_reference: null,
    bank_transfer_id: null,
    external_resource_url: null,
    financial_institution: null,
    installment_amount: 0,
    net_received_amount: 0,
    overpaid_amount: 0,
    payable_deferral_period: null,
    payment_method_reference_id: null,
    total_paid_amount: 1000,
    transaction_id: null
  },
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/criar-pix', function (req, res, next) {
  console.log('REQUEST');
  console.log(req.body);

  // const body = {
  //   transaction_amount: req.body.transaction_amount,
  //   description: req.body.description,
  //   payment_method_id: req.body.paymentMethodId,
  //   payer: {
  //     email: req.body.email,
  //     identification: {
  //       type: req.body.identificationType,
  //       number: req.body.number
  //     }
  //   }
  // }

  // const requestOptions = {
  //   idempotencyKey: '<IDEMPOTENCY_KEY>',
  // };

  // payment.create({ body, requestOptions })
  //   .then((result) => {
  //     console.log('result payment')
  //     console.log(result)
  //   })
  //   .catch(err => {
  //     console.log('erro payment')
  //     console.log(err)
  //   });

  res.status(201).json(MOCK_PIX).end()
});



module.exports = router;
