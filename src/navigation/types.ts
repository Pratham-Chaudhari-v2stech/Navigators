import { NavigatorScreenParams } from '@react-navigation/native';

export type EmployeeStackParamList = {
  EmployeeList: undefined;
  EmployeeDetails: {
    employeeId: number;
  };
  AddEmployee: undefined;
};

export type MainTabParamList = {
  Dashboard: undefined;
  Employees: undefined;
  Profile: undefined;
};

export type SettingsStackParamList = {
  SettingsHome: undefined;
};

export type RootDrawerParamList = {
  Home: NavigatorScreenParams<MainTabParamList>;
  Settings: undefined;
};