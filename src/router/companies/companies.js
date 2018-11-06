import Company from '@/views/companies/Company.vue'
import CompanyList from '@/views/companies/CompanyList.vue'
import Companies from '@/views/companies/Companies.vue'

export default {
  path: '/companies',
  component: Companies,
  children: [
    {
      path: '',
      component: CompanyList
    },
    {
      path: 'new',
      component: Company
    },
    {
      path: ':id',
      component: Company,
      props: true
    }
  ]
}
