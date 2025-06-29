import { ButtonThree, ButtonTwo } from "../../common/Button";

export default function Banner() {
	return (
		<div className="w-full section-page">
			<div className="w-full py-20 text-center flex flex-col text-white justify-center place-content-center bg-primary p-10 rounded-xl">
				<h3 className="text-6xl font-semibold mb-8">Ready to Get Started?</h3>
				<p className="text-3xl font-medium normal-case">
					Join thousands of landlords and tenants who trust RentChain for secure, transparent rental transactions.
				</p>
				<div className="flex items-center gap-10 mt-16 m-auto sm:flex-nowrap flex-wrap">
					<ButtonTwo name="browse properties" className="w-full  flex items-center justify-center text-center" />
					<ButtonThree name="list your property" className="w-full  flex items-center justify-center text-center" />
				</div>
			</div>
		</div>
	);
}
