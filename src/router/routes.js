import Welcome from '@/views/Welcome.vue'

// Companies
import Company from '@/views/companies/Company.vue'
import CompanyList from '@/views/companies/CompanyList.vue'
import Companies from '@/views/companies/Companies.vue'

// Resources
// import companiesRouter from '@/router/companies/companies.js'

const routes = [
                { path: '/', component: Welcome, name: 'welcome' },
                // Routes for Company
                {
                  path: '/companies',
                  component: Companies,
                  children: [
                    { path: '', name: '', component: CompanyList },
                    { path: 'new', name: 'new_company_path', component: Company },
                    { path: ':id', component: Company, props: true }
                  ]
                }
              ]

export default routes
