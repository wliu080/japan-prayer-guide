import { render, screen } from '@testing-library/react';
import { TopicOverviewNav } from '../../../components/topic-overview/TopicOverviewNav';
import React from 'react';

describe("Overview Nav", () => {
    test("Renders a section with the right text inside", () => {
        const setSelected = jest.fn()
        const selected = 'church'
        render(<TopicOverviewNav selected={selected} setSelected={setSelected}/>)
        const navContainer = screen.getByTestId("overview-nav-container")

        expect(navContainer).toHaveClass("sticky-top")
    })
})