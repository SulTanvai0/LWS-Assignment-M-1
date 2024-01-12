import classOneData from '../../public/assets/Data/classOne.json';
import classTwoData from '../../public/assets/Data/classTwo.json';
import SearchBox from './SearchBox';
import TableRow from './tableRow';

const StudentTable = () => {

    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28">
            <div className="container">
                <div className="mb-16 flex flex-col items-center">
                    <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                        <span className="text-[#00CC8C]">Students</span> of the Year
                    </h2>
                    {/* just to not look so many code in components */}
                    <SearchBox />

                    <div className="max-w-[848px] mx-auto overflow-auto">

                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#FFFFFF0D]">
                                    <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                                        ID
                                    </th>
                                    <th className="p-5 text-sm md:text-xl font-semibold text-left">
                                        Name
                                    </th>
                                    <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                                    <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* Class One */}
                                <tr className="bg-white/5">
                                    <td className="p-5 text-sm md:text-xl" colSpan="4">Class One</td>
                                </tr>

                                {
                                    classOneData.map((studentsData) => {

                                        return (
                                            <TableRow key={studentsData.id} studentsData={studentsData} />
                                        )
                                    })
                                }
                                {/* Class two */}
                                <tr className="bg-white/5">
                                    <td className="p-5 text-sm md:text-xl" colSpan="4">Class Two</td>
                                </tr>

                                {
                                    classTwoData.map((studentsData) => {

                                        return (
                                            <TableRow key={studentsData.id} studentsData={studentsData} />
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StudentTable;