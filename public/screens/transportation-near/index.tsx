import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import { Button, Card, Divider, NavBar } from 'antd-mobile'
import { useTranslation } from 'react-i18next'
import useGeolocation from 'react-hook-geolocation'

import { Form } from './components'


export const TransportationNearScreen: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const geolocation = useGeolocation()

  const back = () => navigate('/transportation-quiz')

  return (
    <>
      <NavBar onBack={ back } />

      <Form
        onSubmit={ () => {} }
        onCancel={ back }
      />

    </>
  )
}
