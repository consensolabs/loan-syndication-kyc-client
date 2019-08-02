export class LoanService {

    createLoanRequest(braidConnect, agent, amount, company) {
        let promiseFunction = braidConnect.syndService.createLoanRequest(
            agent,
            amount,
            company
        )
            .then(response => {
                console.log("createLoanRequest-Response:", response)
                return response;
            })
            .catch(error => {
                throw (error);
            });
        return promiseFunction;
    };

    fetchRequestedLoans(braidConnect) {
        let promiseFunction = braidConnect.syndService.listLoanRequests()
            .then(response => {
                const dataSource = response.map(item => ({
                    key: item.state.data.loanReqID.id,
                    loanReqID: item.state.data.loanReqID.id,
                    companyName: item.state.data.companyName,
                    timestamp: item.state.data.timestamp,
                    amount: item.state.data.amount,
                    status: item.state.data.status,
                    borrower: item.state.data.financeNode,
                }));
                console.log("fetchLoanRequests-Response:", dataSource)
                return dataSource;

            })
            .catch(error => {
                throw (error);
            });
        return promiseFunction;
    };

    fetchIssuedLoans(braidConnect) {
        let promiseFunction = braidConnect.syndService.listIssuedLoans()
            .then(response => {
                const dataSource = response.map(item => ({
                    key: item.state.data.loanReqID.id,
                    loanReqID: item.state.data.loanReqID.id,
                    borrowerNode: item.state.data.borrowerNode.name,
                    loanId: item.state.data.loanId.id,
                    amount: item.state.data.amount,

                }))
                console.log("fetchIssuedLoans-Response:", dataSource)
                return dataSource;
            })
            .catch(error => {
                throw (error);
            });
        return promiseFunction;
    };

    updateLoanStatus(braidConnect, id, status) {
        let promiseFunction = braidConnect.syndService.issueLoan(
            'O=Agent Bank,L=Mumbai,C=IN',
            id
        )
            .then(response => {
                console.log("updateLoanStatus-Response:", response)
                return response;
            })
            .catch(error => {
                throw (error);
            });
        return promiseFunction;
    };
}

module.export = LoanService;
