import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../atoms/Button/Button'
import { Input } from '../atoms/Input/Input'
import { FormField } from '../molecules/FormField/FormField'
import { getPaginationRange } from '../molecules/Pagination/Pagination'
import { Modal } from '../organisms/Modal/Modal'
import { Tabs } from '../organisms/Tabs/Tabs'
import { DataTable } from '../organisms/DataTable/DataTable'
import { Accordion } from '../organisms/Accordion/Accordion'

describe('Button', () => {
  it('fires onClick and can be disabled while loading', () => {
    const onClick = vi.fn()
    const { rerender } = render(<Button onClick={onClick}>Save</Button>)

    fireEvent.click(screen.getByRole('button', { name: 'Save' }))
    expect(onClick).toHaveBeenCalledTimes(1)

    rerender(
      <Button onClick={onClick} loading>
        Save
      </Button>
    )

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('FormField', () => {
  it('associates the label with the input', () => {
    render(
      <FormField id="email" label="Email address" required>
        <Input id="email" />
      </FormField>
    )

    const input = screen.getByLabelText(/email address/i)
    expect(input).toHaveAttribute('id', 'email')
    expect(input.tagName).toBe('INPUT')
  })
})

describe('Pagination', () => {
  it('collapses long ranges with ellipses', () => {
    expect(getPaginationRange(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(getPaginationRange(10, 20)).toContain('ellipsis')
    expect(getPaginationRange(10, 20)[0]).toBe(1)
    expect(getPaginationRange(10, 20).at(-1)).toBe(20)
  })
})

describe('Tabs', () => {
  it('changes the active panel with the arrow keys', () => {
    render(
      <Tabs
        items={[
          { id: 'one', label: 'Overview', content: 'Overview panel' },
          { id: 'two', label: 'Activity', content: 'Activity panel' }
        ]}
      />
    )

    const first = screen.getByRole('tab', { name: 'Overview' })
    const second = screen.getByRole('tab', { name: 'Activity' })
    expect(first).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(first, { key: 'ArrowRight' })
    expect(second).toHaveAttribute('aria-selected', 'true')
    expect(second).toHaveFocus()
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Activity panel')
  })
})

describe('Modal', () => {
  it('closes on Escape', () => {
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose} title="Delete project">
        Are you sure?
      </Modal>
    )

    expect(screen.getByRole('dialog')).toHaveAccessibleName('Delete project')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not render when closed', () => {
    render(
      <Modal open={false} onClose={() => undefined} title="Hidden">
        Content
      </Modal>
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

describe('Accordion', () => {
  it('toggles a panel', () => {
    render(
      <Accordion
        items={[
          { id: 'a', title: 'First', content: 'First content' },
          { id: 'b', title: 'Second', content: 'Second content' }
        ]}
      />
    )

    const trigger = screen.getByRole('button', { name: 'First' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('First content')).not.toBeVisible()

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('First content')).toBeVisible()
  })
})

describe('DataTable', () => {
  interface Row {
    id: number
    name: string
    score: number
  }

  const rows: Row[] = [
    { id: 1, name: 'Charlie', score: 30 },
    { id: 2, name: 'Alice', score: 10 },
    { id: 3, name: 'Bob', score: 20 }
  ]

  const columns = [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'score', header: 'Score', sortable: true, align: 'right' as const }
  ]

  it('renders rows and sorts by a column', () => {
    render(<DataTable columns={columns} rows={rows} rowKey={(row) => row.id} />)

    const bodyRows = () => screen.getAllByRole('row').slice(1)
    expect(bodyRows()).toHaveLength(3)
    expect(bodyRows()[0]).toHaveTextContent('Charlie')

    fireEvent.click(screen.getByRole('button', { name: /name/i }))
    expect(bodyRows()[0]).toHaveTextContent('Alice')
    expect(screen.getByRole('columnheader', { name: /name/i })).toHaveAttribute(
      'aria-sort',
      'ascending'
    )
  })

  it('renders an empty state', () => {
    render(<DataTable columns={columns} rows={[]} rowKey={(row: Row) => row.id} />)
    expect(screen.getByText('No results')).toBeInTheDocument()
  })
})
