import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import PrimaryButton from '../common/Button'
import TextFieldDemo from '../common/TextField'
import iedData from '../../data/ied.json'

export default function AppCard({ title, subtitle, children, labelButton }) {

    const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(true)
  }
  
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, marginBottom: 2 }}>
      {title && <CardHeader title={title} subheader={subtitle} />}
      <CardContent >
        <PrimaryButton kind='primary' size='medium' children={labelButton} onClick={handleClick}/>
        {children}
        <div>
      {showForm && (
        <div style={{ marginTop: '1rem' }}>
          {Object.keys(iedData.parameters).map((key) => {
            const paramType = iedData.parameters[key]
            const defaultValue = iedData.defaultValues[key]
            if (Array.isArray(paramType)) {
              return (
                <TextFieldDemo

                  label={key}
                  name='empty'
                  defaultValue={defaultValue ? defaultValue.join(', ') : ''}
                />
              )
            }
            return (
              <TextFieldDemo
                label={key}
                name='empty'
                defaultValue={defaultValue !== undefined ? defaultValue : ''}
              />
            )
          })}
        </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}