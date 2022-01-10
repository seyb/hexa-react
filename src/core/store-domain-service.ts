export default interface StoreDomainService {
  store<T>(data: T): void;
}
