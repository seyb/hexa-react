import StoreDomainService from "../../core/store-domain-service";

const StoreService: StoreDomainService = {
 store: <T,>(data: T)  => {console.log(`Stored ${data} !!`)}
}

export default StoreService;
