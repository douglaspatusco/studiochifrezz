import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { getStaffData } from '@/data/staffMembers'

export const useStaffData = () => {
  const { t } = useTranslation()
  const [staff, setStaff] = useState<StaffMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = getStaffData(t) // Obtém os dados traduzidos
    setStaff(data)
    setLoading(false)
  }, [t]) // Atualiza os dados se a tradução mudar

  return { staff, loading }
}
