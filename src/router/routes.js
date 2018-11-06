import Welcome from '@/views/Welcome.vue'

// Companies
import indexCompany from '@/views/companies/index.vue'
import newCompany from '@/views/companies/new.vue'
import showCompany from '@/views/companies/show.vue'
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
                    { path: '', name: 'companies_path', component: indexCompany }, // index
                    { path: 'new', name: 'new_company_path', component: newCompany }, //new
                    { path: ':id', name: 'company_path', component: showCompany } //show
                  ]
                }
              ]

export default routes
