import Vacancy from "./vacancy";

export default interface VacancyResponse {
  totalPages: number;
  currentPage: number;
  vacancies: Vacancy[];
}
