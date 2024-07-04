import { updateInvoice } from '@/app/lib/actions';
import { InvoiceForm, CustomerField } from '@/app/lib/definitions';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

  return <form action={formAction}></form>;
}

function useActionState(
  updateInvoiceWithId: (formData: FormData) => Promise<void>,
  initialState: { message: null; errors: {} },
): [any, any] {
  throw new Error('Function not implemented.');
}
