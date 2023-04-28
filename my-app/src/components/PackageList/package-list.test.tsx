import React from 'react';
import { render, screen } from '@testing-library/react';
import { IPackage } from '../../utils/interfaces';
import PackageList from '.';

describe('PackageList', () => {
  const packages: IPackage[] = [
    {
      package: {
        name: 'react',
        version: '17.0.2',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        links: { npm: 'https://www.npmjs.com/package/react' },
        publisher: { username: 'facebook' },
      },
    },
    {
      package: {
        name: 'lodash',
        version: '4.17.21',
        description: 'A modern JavaScript utility library delivering modularity, performance, & extras.',
        links: { npm: 'https://www.npmjs.com/package/lodash' },
        publisher: { username: 'npm' },
      },
    },
  ] as unknown as IPackage[];

  it('renders a package list', () => {
    render(<PackageList packages={packages} />);
    packages.forEach((pkg) => expect(screen.getByText(pkg.package.name)).toBeInTheDocument())
  });
});
