import { AbilityBuilder, ExtractSubjectType, InferSubjects, PureAbility, fieldPatternMatcher, mongoQueryMatcher, subject } from '@casl/ability'
import { tr } from 'date-fns/locale'
import { type } from 'os'
import { useAuth } from 'src/hooks/useAuth'
import { Firma } from 'src/types/firma'
import { Forklift } from 'src/types/forklift'
import { ServisFormu } from 'src/types/servisFormu'
import { User, UserRole } from 'src/types/user'

export type Subjects = 'all' | 'admin' | 'firma' | 'User' | 'ServisFormu' | 'Forklift'
export type Actions = 'manage' | 'read' | 'update'  

export type AppAbility = PureAbility<[Actions, Subjects]>

export const AppAbility = PureAbility<[Actions, Subjects]>
export type ACLObj = {
  action: Actions
  subject: Subjects
}
// {ability.can("read", "admin") && (
//     <TabPanel sx={{ p: 0 }} value="genel">
//       <ForklifTabGenel forklift={forklift} />
//     </TabPanel>
//   )}  ability.can("read", an("ServisFormu", servisFormu))
// const ability = useAbility(AbilityContext);
// if (isLoading) return <div>Loading...</div>;
// if (error) return <div>{error?.message}</div>;
// if (!forklift) return <div>Not found</div>;
// if (!ability.can("read", an("Forklift", forklift))) return <Error401 />;



// if (!ability.can("read", an("Forklift", forklift))) return <Error401 />;

const defineRulesFor = (role: string, subject: Subjects) => {
  const { can, cannot, rules } = new AbilityBuilder(AppAbility)
  const auth = useAuth()
  if (role === UserRole.ADMIN) {
    can('manage', 'all') 
  } else if (role === UserRole.FIRMA) {
    can(['read'], 'firma')
    can(['read'], 'ServisFormu', { firmaId: auth.user?.firmaId } as ServisFormu)
    can(['read'], 'Forklift', { firmaId: auth.user?.firmaId, firmayaAit: true } as Forklift)
  } else {
    can(['read'], subject)
  }

  return rules
}
export const an = (type: Subjects, object: any) => subject(type, object);

export const buildAbilityFor = (role: string, subject: Subjects): AppAbility => {
  return new AppAbility(defineRulesFor(role, subject), {
    // @ts-ignore
    conditionsMatcher: mongoQueryMatcher,
    fieldMatcher: fieldPatternMatcher,
    // @ts-ignore
    // detectSubjectType: object => object!.constructor as ExtractSubjectType<Subjects>
  })
}

export const defaultACLObj: ACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
