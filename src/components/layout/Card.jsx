import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import PrimaryButton from '../common/Button'

export default function AppCard({ title, subtitle, children, labelButton }) {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, marginBottom: 2 }}>
      {title && <CardHeader title={title} subheader={subtitle} />}
      <CardContent>
        <PrimaryButton kind='primary' size='medium' children={labelButton}/>
        {children}
      </CardContent>
    </Card>
  )
}