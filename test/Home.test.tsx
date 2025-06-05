import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Treeコンポーネントが正しく描画される前提
describe('Home コンポーネント', () => {
    test('h1タグが表示されること', () => {
        render(<Home />);
        const heading = screen.getByRole('heading', { name: /Hello MUI/i });
        expect(heading).toBeInTheDocument();
    });

    test('MUIボタンが表示されること', () => {
        render(<Home />);
        const button = screen.getByRole('button', { name: /MUI ボタン/i });
        expect(button).toBeInTheDocument();
    });

    test('Tree内のノード「親1」が表示されること', () => {
        render(<Home />);
        expect(screen.getByText('親1')).toBeInTheDocument();
    });

    test('Tree内の孫ノード「孫1-2-1-1」が表示されること（非表示の場合は fail する可能性あり）', () => {
        render(<Home />);
        fireEvent.click(screen.getByText('親1'));
        fireEvent.click(screen.getByText('子1-2'));
        fireEvent.click(screen.getByText('孫1-2-2'));
        expect(screen.getByText('孫1-2-1-1')).toBeInTheDocument();
    });
});