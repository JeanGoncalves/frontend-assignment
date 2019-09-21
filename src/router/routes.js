import Main from 'Pages/Main.vue'
import Company from 'Pages/Company'
import CompanyPage from 'Pages/Company/Page'
import CompanyData from 'Pages/Company/Data'

export const routes = [{
    meta: { label: 'Home' },
    name: 'Main',
    path: '/',
    component: Main,
    children: [
        {
            path: 'company',
            component: Company,
            children: [
                {
                    meta: { label: 'Company Data' },
                    name: 'home.company.data',
                    path: 'data',
                    component: CompanyData,
                },
                {
                    meta: { label: 'Company Table' },
                    name: 'home.company.table',
                    path: 'table',
                },
                {
                    meta: { label: 'Company Page' },
                    name: 'home.company',
                    path: 'page',
                    component: CompanyPage,
                },
            ],
        },
    ],
}]