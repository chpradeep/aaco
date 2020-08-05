export const childRoutes = [
    {
      path: 'mat-grid',
      loadChildren: () =>
        import('./mat-grid/mat-grid.module').then(m => m.MatGridModule),
      data: { icon: 'grid_on', text: 'Flex Grid' }
    }
  ];