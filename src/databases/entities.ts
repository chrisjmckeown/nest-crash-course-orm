import { NewTable } from 'src/newTable/entities/newTable.entity';

/*
 * There seems to be an issue with running jest end-2-end tests when using the regex path match when specifying
 * the entities in the dataSource. Therefore, I've resorted to specifying all the entities explicitly which is still a
 * valid alternative.
 * */
export const ENTITIES = [NewTable];
