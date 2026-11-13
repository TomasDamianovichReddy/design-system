import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../../atoms/Badge/Badge'
import { DataTable, type DataTableProps } from './DataTable'

interface Person {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'invited'
  seats: number
}

const people: Person[] = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@acme.dev', role: 'Admin', status: 'active', seats: 2 },
  { id: 2, name: 'Grace Hopper', email: 'grace@acme.dev', role: 'Engineer', status: 'active', seats: 1 },
  { id: 3, name: 'Alan Turing', email: 'alan@acme.dev', role: 'Engineer', status: 'invited', seats: 1 },
  { id: 4, name: 'Katherine Johnson', email: 'katherine@acme.dev', role: 'Analyst', status: 'active', seats: 3 }
]

function PeopleTable(props: DataTableProps<Person>) {
  return <DataTable<Person> {...props} />
}

const meta: Meta<typeof PeopleTable> = {
  title: 'Organisms/DataTable',
  component: PeopleTable,
  tags: ['autodocs'],
  args: {
    rows: people,
    rowKey: (row: Person) => row.id,
    columns: [
      { key: 'name', header: 'Name', sortable: true },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role', sortable: true },
      {
        key: 'status',
        header: 'Status',
        render: (row: Person) => (
          <Badge tone={row.status === 'active' ? 'success' : 'warning'} dot>
            {row.status}
          </Badge>
        )
      },
      { key: 'seats', header: 'Seats', align: 'right', sortable: true, width: '6rem' }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ width: '52rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof PeopleTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sorted: Story = {
  args: { defaultSort: { key: 'name', direction: 'asc' } }
}

export const Dense: Story = {
  args: { dense: true }
}

export const Loading: Story = {
  args: { loading: true }
}

export const Empty: Story = {
  args: { rows: [] }
}
