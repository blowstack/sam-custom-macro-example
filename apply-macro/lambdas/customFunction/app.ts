
export const customFunction = async (): Promise<{ body: string; statusCode: number }> => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: (process.env.DynamicVariableFromMacro),
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
};
