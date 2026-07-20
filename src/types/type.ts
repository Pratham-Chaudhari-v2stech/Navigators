export interface Course {
    id: string;
    title: string;
    instructor: string;
    duration: string;
    level: string;
    description: string;
}

export type RootStackParamList = {
    Login: undefined;
    RootDrawer: undefined;
    AddCourse: undefined;
    CourseDetails: {
        course: Course;
    };
};

export type RootDrawerParamList = {
    Home: undefined;
    Courses: undefined;
    Profile: undefined;
};