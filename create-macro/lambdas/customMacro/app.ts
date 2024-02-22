enum ArnTypes {
    Role = 'Role',
    USER = 'User'
}

export const convertToARN = async (event): Promise<any> => {

    const response = {
        requestId: event.requestId,
        status: "success"
    };

    try {
        const { AccountId, Name, ArnType  } = event.params;
        switch (ArnType) {
            case ArnTypes.Role:
                response.fragment =  `arn:aws:iam::${AccountId}:role/${Name}`
                break;
            case ArnTypes.USER:
                response.fragment =  `arn:aws:iam::${AccountId}:user/${Name}`
                break
            default:
                throw Error('invalid arn type provided')
        }
    } catch (error) {
        console.log(error)
    }


    return response;
};
