import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  address: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 24, name: 'Julieta da Silva Romeu', address: 'Avenida José Maria das Dores, 302'},
  {id: 66, name: 'Rebeca Tarciania de Britto Romero', address: 'Rua 25 de Abril, 5040'},
  {id: 159, name: 'Isabela Moraes de Souza', address: 'Rua José Maria dos Santos, 208'},
  {id: 463, name: 'Bianca Fiorentino Motta', address: 'Avenida Rio de Janeiro, 4038'},
  {id: 569, name: 'Anastasia Seixas Dória', address: 'Avenida São Paulo, 3097'},
  {id: 456, name: 'Brenda Lima Pinto', address: 'Rua Brasília, 5974'},
  {id: 234, name: 'Jaqueline Martins Albuquerque', address: 'Rua Curitiba, 408'},
  {id: 32, name: 'Marcela Machado de Assis', address: 'Rua Dores, 48'},
  {id: 96, name: 'Marina Ruy Barreto', address: 'Rua Valenza, 827'},
  {id: 123, name: 'Fernanda Monte Claro', address: 'Rua Brasília, 5980'},
  {id: 1, name: 'Valentina Marina Lorenzo', address: 'Rua Nordeste, 173'},
  {id: 36, name: 'Gabriela Cravo e Canella', address: 'Rua Montes Clares, 8'},
  {id: 15, name: 'Stephane Coutino de Jesus', address: 'Rua São Francisco, 563'},
  {id: 51, name: 'Daniele Vanderleia Soares', address: 'Rua Fernando de Noronha, 2749'},
  {id: 147, name: 'Sabrina Ribeiro de Carvalho', address: 'Avenida Guatemala, 4982'},
  {id: 123, name: 'Leila Nunes de Lacerda', address: 'Avenida Guatemala, 4890'},
  {id: 171, name: 'Regina Duarte Souza', address: 'Rua Fortaleza, 6579'},
  {id: 190, name: 'Tyffani Turmalina Ketlen', address: 'Rua Dores, 8742'},
  {id: 180, name: 'Celeste Marckenzie dos Céus', address: 'Rua Arlindo Crusoé, 3819'},
  {id: 192, name: 'Raimunda de Jesus Cristo', address: 'Rua Arlindo Crusoé, 14'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
